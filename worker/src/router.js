import { Router } from 'itty-router'
import {
    json,
    missing,
    error,
} from 'itty-router-extras'

import { handleCors, wrapCorsHeader } from './corshelper'

// Load the router
const router = Router()

// List the servers
router.get('/v1/status', async () => {
    let response = {
        "apiMojang": false,
        "sessionServer": false,
        "minecraftServices": false
    }

    let username = "james090500"
    let uuid = "ba4161c03a42496c8ae07d13372f3371"

    let apiMojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
    let apiMojangData = await apiMojang.json()
    response.apiMojang = apiMojang.ok && apiMojangData.id == uuid;

    let sessionServer = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
    let sessionServerData = await sessionServer.json()
    response.sessionServer = sessionServer.ok && sessionServerData.id == uuid;

    let minecraftServices = await fetch("https://api.minecraftservices.com")
    response.minecraftServices = minecraftServices.status == 401;

    return wrapCorsHeader(response ? json(response) : error(500, 'Something went wrong'));
})

// All other routers
router.options('*', handleCors())
router.all('*', () => missing('Not Found'))

//Export the router;
export default router;