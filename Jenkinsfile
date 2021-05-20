def IMG_NAME = 'yue_site'
def CONTAINER_NAME = 'yue_site'

pipeline {
  agent any

  stages {
    stage('Clear old container') {
      steps {
        script {
          try {
            sh "docker rm -f ${CONTAINER_NAME}"
            sh "docker rmi -f ${IMG_NAME}"
          } catch (exc) {
            echo "Not Found container or image:${CONTAINER_NAME} "
            echo "${exc}"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh "docker build -t ${IMG_NAME} -f Dockerfile ."
        sh "docker run -d -p 8000:9000 --name ${CONTAINER_NAME} ${IMG_NAME}"
      }
    }
  }

  post {
    success {
      echo 'success'
    }
    failure {
      echo 'fail'
    }
  }
}
