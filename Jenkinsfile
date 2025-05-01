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
                sh 'docker build -t <your-dockerhub-username>/starlinx .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker push <your-dockerhub-username>/starlinx'
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sh 'docker run -d -p 80:80 --name starlinx <your-dockerhub-username>/starlinx'
            }
        }
    }
}

