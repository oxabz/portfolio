import {Router} from "https://deno.land/x/opine@0.21.2/mod.ts"

const router = new Router();

function helloController(req:any, res:any){
    res.send('General Kenobi')
}
function showPath(req:any, res:any) {
    res.send("test")
}

router.get('/hello-there', helloController)
router.get('/test/*', showPath)

export default router