import {Router} from "https://deno.land/x/opine@0.21.2/mod.ts"
import * as path from "https://deno.land/std/path/mod.ts";


const router = new Router();

router.get('/',(req,res)=>{
    let targetPath = './content/';
    try {
        if(Deno.statSync(targetPath).isFile){
            res.sendFile(targetPath)
        }
        else{
            let content = [];
            let iterator:Iterable<Deno.DirEntry> = Deno.readDirSync('./content/'+req.url);
            for (const it of iterator) {
                content.push(it);
            }
            res.json({
                name: path.basename(targetPath),
                content: content 
            })
        }
    } catch (error) {
        res.setStatus(401).send(error)
    }
})


router.get('/*',(req,res)=>{
    let targetPath = './content/'+req.url;
    try {
        if(Deno.statSync(targetPath).isFile){
            res.sendFile(targetPath)
        }
        else{
            let content = [];
            let iterator:Iterable<Deno.DirEntry> = Deno.readDirSync('./content/'+req.url);
            for (const it of iterator) {
                content.push(it);
            }
            res.json({
                name: path.basename(targetPath),
                content: content 
            })
        }
    } catch (error) {
        res.setStatus(401).send(error)
    }
})

export default router