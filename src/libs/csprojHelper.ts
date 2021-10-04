import fs from 'fs';
import { promisify } from 'util';
import xmlParser from 'fast-xml-parser';
const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);
const defaultUnicode = 'utf8';

export async function getDLLpathsFromCsprojFiles(csprojPaths: string[]) {
  const result: string[] = [];
  for(const csprojPath of csprojPaths){
    const xmlContent = await readFile(csprojPath, defaultUnicode);
    const jsonObj = xmlParser.parse(xmlContent);
    let itemGroupReference:any[] = [];
    for(const itemGroup of jsonObj.Project.ItemGroup){
      if(itemGroup.hasOwnProperty('Reference')){
        itemGroupReference = itemGroup.Reference;
        break;
      }
    }

    const paths = itemGroupReference
      .map((item: {HintPath: string}) => item.HintPath)
      .filter((item: any) => item)
    // console.log(paths)
    result.push(...paths);
  }

  return result;
}
