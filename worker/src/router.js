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
    let username = "james090500"
    let uuid = "ba4161c03a42496c8ae07d13372f3371"

    let response = {
        apiMojang: {
            id: 1,
            status: false,
            description: "Mojangs API",
            url: `https://api.mojang.com/users/profiles/minecraft/${username}`
        },
        sessionServer: {
            id: 2,
            status: false,
            description: "Minecraft Session Server",
            url: `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`
        },
        minecraftServices: {
            id: 3,
            status: false,
            description: "Minecraft Web Services",
            url: "https://api.minecraftservices.com"
        }
    }

    let apiMojang = await fetch(response.apiMojang.url)
    let apiMojangData = await apiMojang.json()
    response.apiMojang.status = apiMojang.ok && apiMojangData.id == uuid;

    let sessionServer = await fetch(response.sessionServer.url)
    let sessionServerData = await sessionServer.json()
    response.sessionServer.status = sessionServer.ok && sessionServerData.id == uuid;

    let minecraftServices = await fetch(response.minecraftServices.url)
    response.minecraftServices.status = minecraftServices.status == 401;

    return wrapCorsHeader(response ? json(response) : error(500, 'Something went wrong'));
})

// All other routers
router.options('*', handleCors())
router.all('*', () => missing('Not Found'))

//Export the router;
export default router;