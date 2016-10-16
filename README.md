## Before
- Install node
- Install npm

## Clone
- https://github.com/Simplicate/sparrow.web
- https://github.com/Simplicate/sparrow.api 

## Development cycle
```
npm run build (Control Shift B)
npm run host 
npm rnu test
rpm run clean
npm version minor
```

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

### VS Code customisations
```
// Place your key bindings in this file to overwrite the defaults
[
    {
        "key": "ctrl+shift+z",
        "command": "workbench.action.tasks.runTask"
    }
]
``` 

## Done
```
git add .
git commit -a -m "I developed this"
git push origin master --tags
```

## Main Components
	- https://github.com/react-bootstrap/react-bootstrap
	- https://github.com/ReactTraining/react-router
	- https://github.com/reactjs/redux
	- https://github.com/react-bootstrap/react-router-bootstrap
	- https://github.com/babel/babel
	
## Others Components
	- Babel Presets: es2015, react, stage-2
	- Loaders: babel-loader, css-loader, file-loader, json-loader, less-loader, raw-loader, sass-loader, style-loader, url-loader


### notes:
This might be better
http://allenfang.github.io/react-bootstrap-table

```
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa
git clone git@github.com:Simplicate/sparrow.web.git
```
