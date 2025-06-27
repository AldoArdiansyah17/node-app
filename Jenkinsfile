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
        script {
            // Jalankan server di background
            sh 'node app.js &'
            // Tunggu sebentar agar server siap
            sh 'sleep 3'
            // Jalankan test
            sh 'npm test'
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
