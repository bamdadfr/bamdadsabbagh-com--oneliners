import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * @returns {React.ReactNode} React Component
 */
export default function IndexPage () {

    const router = useRouter ()

    useEffect (() => {

        (async () => {

            await router.replace ('/ffmpeg/split')
        
        }) ()

    }, [router])

    return (
        <>

        </>
    )

}