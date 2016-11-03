## Build docker image

```
docker build -t web .

docker run --name web \
	-p 80:80 \
	-d web
```

## Developer tools
 - https://github.com/gaearon/redux-devtools
 - https://github.com/zalmoxisus/redux-devtools-extension
