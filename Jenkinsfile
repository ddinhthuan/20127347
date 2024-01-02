node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("20127347/demo")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
