# hojjat-dev

## Apps and Packages

- [Blog app](/packages/blog/README.md)
- [Components](/packages/components/README.md)
- [Utils](/packages/utils/README.md)

## Scripts
- Show the list of packages
```sh
$ yarn workspaces list
```
- Run a script on a specific package
for example this will run the build command in @hojjat-dev/components package
```sh
$ yarn workspace @hojjat-dev/components run build
```

- Start and test any package 
```sh
$ yarn workspace <workspace-name> start
$ yarn workspace <workspace-name> test
```




