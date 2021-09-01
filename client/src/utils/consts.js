export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const MAIN_ROUTE = '/main'
export const ADMIN_ROUTE_OWNER = '/admin/ownerTrack'







// async getAllOwner(req,res){
//   let authorization = req.headers.authorization.split(" ")[1],
//   decoded;
//     try {
//         decoded = jwt.verify(authorization, process.env.SECRET_KEY);
//     } catch (e) {
//         return res.status(401).send("unauthorized");
//     }
// const id_user = decoded.id
//   const tracks = await Track.findAll({ where:{  userId:id_user } })
//   return res.json(tracks)
// }




