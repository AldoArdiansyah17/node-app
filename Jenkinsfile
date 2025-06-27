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
                    // Tunggu 3 detik agar server siap
                    sh 'sleep 3'
                    // Jalankan testing
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

        stage('Deploy') {
            steps {
                sh 'echo "Menjalankan aplikasi (deploy)..."'
                sh 'node app.js &'
            }
        }
    }
}
