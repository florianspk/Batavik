import { IPath, IPathLisItem } from './d'
const { exec } = require("child_process");
const pathToTest: IPath[] = require("./paths/all_path_to_test.ts");

parsePaths();

async function launchTest(path: IPath): Promise<void> {
  
}

function parsePaths(): void {
  pathToTest.forEach(path => {
    path.pathList.forEach(async pathItem => {
      const command = `node ./siege/ --service-name=${path.name} --port=${path.port} --path=${pathItem.path} --method=${pathItem.method} --body=${JSON.stringify(pathItem.data)}`;
      
      await exec(command, (err: any, stdout: any, stderr: any) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });

    });
  });
}