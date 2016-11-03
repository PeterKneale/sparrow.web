# Sparrow
Sparrow WEB

## Developer tools
 - https://github.com/gaearon/redux-devtools
 - https://github.com/zalmoxisus/redux-devtools-extension

## Publish

 - Build the `debug` docker image using the NGINX base image.
    ```
    npm run build
    docker build -t sparrow/web-debug -f Dockerfile.debug .
    docker tag sparrow/web-debug gcr.io/simplicate-sparrow-project/web-debug
    gcloud docker -- push gcr.io/simplicate-sparrow-project/web-debug
    ```

- Build the `release` docker image using the NGINX base image.
    ```
    npm run build
    docker build -t sparrow/web-release -f Dockerfile.release .
    docker tag sparrow/web-release gcr.io/simplicate-sparrow-project/web-release
    gcloud docker -- push gcr.io/simplicate-sparrow-project/web-release
    ```

## Run
 - run the docker container
	```
	docker run --name web \
		-p 80:80 \
		-d sparrow/web-debug
	```

## Stop
- delete local containers and images
    ```
    docker rm -f $(docker ps -a -q)
    docker rmi -f $(docker images -q)
    ```
