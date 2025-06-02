pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'node app.js & sleep 3 && npm test'
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
                sh 'echo "Menjalankan aplikasi..."'
                sh 'node app.js &'
            }
        }
    }
}
