import { NextResponse } from "next/server"

// export const middleware = (request)=> {
//     console.log("I am a middleware")
//     return NextResponse.next();   
// }

// export const config = {
//     matcher: '/dashboard'   // aikhane dashboard route a hitt korle uporer middleware er moddhe pathia diba.  sob condition thik thakle NextResponse.next() er maddhome dashboard a pathabe.
// }


// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
// export const middleware = (request)=> {
//     return NextResponse.redirect(new URL('/dashboard', request.url))
// }

// export const config = {
//     matcher: '/about'  // aikhane about page a jokhon hitt korbo,, age uporer middleware a jabe. Jodi chai cono condition dia false hole login page or another kono page a pathia dibo, tahole NextResponce.redirect(new URL('/dashboard', request.url)) ; ai code er maddhome oi another page a nia jabe.
// }



// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
// export const middleware = (request)=> {
//     return NextResponse.rewrite(new URL('/blogs', request.url))
// }

// export const config = {
//     matcher: '/about'  // aikhane about page a jokhon hitt korbo,, age uporer middleware a jabe. Then new URL(jei path ase sei patha a move korbe). Oi path a move korbe. But url a /about show hobe. But asole /blogs patha gabe.
// }


// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
// export const middleware = (request)=> {
//     return NextResponse.redirect(new URL('/contact', request.url))
// }

// export const config = {
//     matcher:[ '/about', '/services' ] // aikhane about or services url a jokhon hitt korbo,, age uporer middleware a jabe. Then new URL(/pathname). oi path a pathia diba.
// }


// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
// export const middleware = (request)=> {
//     if(request.nextUrl.pathname.startsWith('/about')){   // Uporer kajgulo condition dia handle koresi. Jokhon request a asa pathName /about hobe tokhon if block er moddhe dhoki redirect korbe.

//         return NextResponse.redirect(new URL('/contact', request.url))
//     }
// }


// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
// const user = true;
// export const middleware = (request)=> {
//    if(!user){             // user na thakle login page a nia jabe. Otherwise dashboard or services page a nia jabe.
//     return NextResponse.redirect(new URL('/login', request.url))
//    }
//    return NextResponse.next();
// }
// export const config = {
//     matcher: ['/dashboard', '/services']
// }



// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>
const cookieValue = 'next-superhero'
export const middleware = (request)=> {
  console.log(request.cookies.get('token'))  // aikhane request er moddhe onek dhoroner value pawa jai.
  const cookies = request.cookies.get('token')

  if(!cookies || cookies.value !== cookieValue ){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
export const config = {
    matcher: ['/dashboard', '/services']
}

