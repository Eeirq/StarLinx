 pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Eeirq/StarLinx.git', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t eelysa/starlinx .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'eelysa', url: '']) {
                    sh 'docker push eelysa/starlinx'
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sh 'docker run -d -p 80:80 --name starlinx eelysa/starlinx'
            }
        }
    }
}

