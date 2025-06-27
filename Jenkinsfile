pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm test'
                    }
                }
            }
            post {
                success {
                    echo 'Tes berhasil!'
                }
                failure {
                    echo 'Tes gagal!'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'echo "Menjalankan aplikasi..."'
                        sh 'node app.js &'
                    }
                }
            }
        }
    }
}
