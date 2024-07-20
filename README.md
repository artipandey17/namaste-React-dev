# Namaste React

# Parcel
 dev build
 local server
 HMR hot module replacement(without full loading code it add or removes data)
 file watching algorithm  writtrn in C++
 caching -faster builds
 Image Optimization
 Minification of the file also(when we put in the production)
 Bundles the files 
 compress
 consistent hashing
 code splitting
 differential bundling -(allows you apps to run on diffreent browsers like mozilla ,chrome etc aand to support older browser) 
 Diagnostics
 error handlings (good error handlings)
 supports HTTPs
 tree shaking(it removes unused codes)
 diffeerent dev and prod bundles(as prod useses little more time to build than dev)

 #  UI planning structure
 
//  header
//   -logo
//   -nav items
//  body
//    - search
//    - resturantContainer
//        - name of resturant,ratings,cusiene,
//    - resturantCard
//  footer
//    - copyrights
//    -links
//    -address 
//    -contacts


there are 2 types of exports
 1 Default Export/import 
   export default Component
   import Component from "path"

 2 Named Export/import 
   export const Component
   import {Component} from "path"  