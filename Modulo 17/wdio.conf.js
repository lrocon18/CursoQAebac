const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    hostname: 'localhost',
    services: ['appium'],
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "platformVersion": "10",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        'newCommandTimeout': 240
    }],

    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },

    reporters: ['spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
        saveAllVideos: true,           // If true, also saves videos for successful test cases      
        videoSlowdownMultiplier: 50,  // Higher to get slower videos, lower for faster videos [Value 1-100]
    }]
],
onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function (exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
        })
    })
},
afterStep: function (test, scenario, { error, duration, passed }) {
    if(error) {
        driver.takeScreenshot()
    }
}
}