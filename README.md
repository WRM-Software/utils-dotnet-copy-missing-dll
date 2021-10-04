# utils-dotnet-copy-missing-dll
When using `msbuild`, some dll may missing from `/Bin` path, this will help to copy the missing dll

# CLI

```
Usage: index [options]

An application for helping to copy the missing dll from .csproj files

Options:
  -m, --mock                     Enable mock mode
  -i, --csproj-paths [value...]  Array of .csproj paths
  -o, --output-dir <directory>   output directory
  -b, --base-dir <directory>     base directory of csproj file
  -h, --help                     display help for command
```

## Usage

```
git clone https://github.com/WRM-Software/utils-dotnet-copy-missing-dll
cd utils-dotnet-copy-missing-dll
node .\dist\index.js
```

## Dev

```
PS D:\working-dir\utils-dotnet-copy-missing-dll>  yarn dev -i input\Libraries.csproj input\API.csproj -o Bin 
-b .\utils-dotnet-copy-missing-dll

cp D:\working-dir\utils-dotnet-copy-missing-dll\packages\Microsoft.AspNet.WebPages.3.0.0\lib\net45\System.Web.WebPages.Razor.dll Bin
Skip... D:\working-dir\utils-dotnet-copy-missing-dll\Bin\WebGrease.dll
```

# Ref
- https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
