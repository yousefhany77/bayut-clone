const IS_BROWSER = typeof window !== 'undefined'

export const setupMocks = async ()=>{
    if(IS_BROWSER){
        const {browser} = await import('./browser')
        browser.start()
    }
    else{
        const {server} = await import('./server')
        server.listen()
    }
}