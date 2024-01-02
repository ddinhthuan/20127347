node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker') {

        def customImage = docker.build("20127347/demo")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
