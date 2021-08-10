const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user' ,{
  id :{type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true},
  email:{type:DataTypes.STRING , unique:true },
  password :{type:DataTypes.STRING  },
  role:{type:DataTypes.STRING , defaultValue:'USER'}
})

const PlayList = sequelize.define('playList' ,{
  id :{type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true},
  name :{type:DataTypes.STRING },
})

const PlayListTrack = sequelize.define('playListTrack' ,{
  id :{type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true},
})

const Track = sequelize.define('track' ,{
  id :{type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true},
  name :{type:DataTypes.STRING ,unique:true , allowNull :false },
})

User.hasMany(PlayList)
PlayList.belongsTo(User)

PlayList.hasMany(PlayListTrack)
PlayListTrack.belongsTo(PlayList)

Track.hasMany(PlayListTrack)
PlayListTrack.belongsTo(Track)

module.exports = {
  User,
  PlayList,
  PlayListTrack,
  Track
}
