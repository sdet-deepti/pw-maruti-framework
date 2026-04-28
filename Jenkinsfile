pipeline {
    agent none 

    stages {
        stage('Checkout') {
            agent any 
            steps {
                deleteDir()
                sshagent(['TTNPL-DeeptiYadav']) {
                    sh "git -c core.sshCommand='ssh -o StrictHostKeyChecking=no' clone git@github.com:sdet-deepti/pw-maruti-framework.git ."
                }
            }
        }

        stage('Playwright Suite') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.59.1-jammy'
                    args  '--shm-size=2gb --user root'
                    alwaysPull false
                }
            }
            stages {
                stage('Install & Test') {
                    steps {
                        script {
                            try {
                                sh 'npm ci'
                                
                                // THE FINAL FIX: xvfb-run creates a virtual display.
                                // This satisfies the "Missing X server" error without changing Git code.
                                sh 'xvfb-run npx playwright test --project=chromium'
                                
                            } finally {
                                // Hand back ownership so Jenkins Master can clean up
                                sh 'chown -R 1000:1000 .'
                            }
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            node('built-in') {
                script {
                    if (fileExists('playwright-report/index.html')) {
                        publishHTML(target: [
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'playwright-report',
                            reportFiles: 'index.html',
                            reportName: 'Playwright Regression Report'
                        ])
                    }
                }
                cleanWs()
            }
        }
    }
}
