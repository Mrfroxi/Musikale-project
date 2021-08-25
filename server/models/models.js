const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const PlayList = sequelize.define("playList", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

const Track = sequelize.define("track" ,{
  id :{ type:DataTypes.INTEGER , primaryKey :true  , autoIncrement : true },
  name :{ type:DataTypes.STRING ,unique:true , allowNull :false },
})

User.hasMany(Track);
Track.belongsTo(User);

User.hasMany(PlayList);
PlayList.belongsTo(User);

PlayList.belongsToMany(Track, { through: "PlayListTrack" });
Track.belongsToMany(PlayList, { through: "PlayListTrack" });

User.belongsToMany(Track, { through: "FavouriteTrack" });
Track.belongsToMany(User, { through: "FavouriteTrack" });

PlayList.belongsToMany(User, { through: "FavouritePlaylist" });
User.belongsToMany(PlayList, { through: "FavouritePlaylist" });

module.exports = {
  User,
  PlayList,
  Track,
};
