// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Game = Game || {};

/**
 * @const
 * @namespace
 */
Game.Engine = Game.Engine || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking = Game.Engine.Networking || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking.FlatBuffers = Game.Engine.Networking.FlatBuffers || {};

/**
 * @enum
 */
Game.Engine.Networking.FlatBuffers.AllMessages = {
  NONE: 0,
  NetWorldView: 1,
  NetHello: 2,
  NetSpawn: 3,
  NetControlInput: 4,
  NetPing: 5,
  NetLeaderboard: 6
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboard}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboard=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboard}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.getRootAsNetLeaderboard = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboard).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.type = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.entries = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.entriesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.startNetLeaderboard = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} typeOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.addType = function(builder, typeOffset) {
  builder.addFieldOffset(0, typeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} entriesOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.addEntries = function(builder, entriesOffset) {
  builder.addFieldOffset(1, entriesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.createEntriesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.startEntriesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.endNetLeaderboard = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.getRootAsNetLeaderboardEntry = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.score = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.color = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.startNetLeaderboardEntry = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addName = function(builder, nameOffset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} score
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addScore = function(builder, score) {
  builder.addFieldInt32(1, score, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addColor = function(builder, colorOffset) {
  builder.addFieldOffset(2, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.endNetLeaderboardEntry = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetHello = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetHello}
 */
Game.Engine.Networking.FlatBuffers.NetHello.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetHello=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetHello}
 */
Game.Engine.Networking.FlatBuffers.NetHello.getRootAsNetHello = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetHello).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.NetHello.prototype.time = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetHello.startNetHello = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} time
 */
Game.Engine.Networking.FlatBuffers.NetHello.addTime = function(builder, time) {
  builder.addFieldInt64(0, time, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetHello.endNetHello = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetSpawn = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetSpawn}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetSpawn=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetSpawn}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.getRootAsNetSpawn = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetSpawn).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.ship = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.color = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.startNetSpawn = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addName = function(builder, nameOffset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} shipOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addShip = function(builder, shipOffset) {
  builder.addFieldOffset(1, shipOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addColor = function(builder, colorOffset) {
  builder.addFieldOffset(2, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.endNetSpawn = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetControlInput = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetControlInput}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetControlInput=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetControlInput}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.getRootAsNetControlInput = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetControlInput).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.angle = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.boost = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.shoot = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.startNetControlInput = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} angle
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addAngle = function(builder, angle) {
  builder.addFieldFloat32(0, angle, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} boost
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addBoost = function(builder, boost) {
  builder.addFieldInt8(1, +boost, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} shoot
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addShoot = function(builder, shoot) {
  builder.addFieldInt8(2, +shoot, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.endNetControlInput = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetPing = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetPing}
 */
Game.Engine.Networking.FlatBuffers.NetPing.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetPing=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetPing}
 */
Game.Engine.Networking.FlatBuffers.NetPing.getRootAsNetPing = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetPing).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.NetPing.prototype.time = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetPing.startNetPing = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} time
 */
Game.Engine.Networking.FlatBuffers.NetPing.addTime = function(builder, time) {
  builder.addFieldInt64(0, time, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetPing.endNetPing = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetWorldView = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetWorldView}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetWorldView=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetWorldView}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.getRootAsNetWorldView = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetWorldView).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.time = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.playerCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.isAlive = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : true;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetBody=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.updates = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetBody).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.updatesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletes = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Int32Array}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletesArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetAnnouncement=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.announcements = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetAnnouncement).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.announcementsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.NetBody=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody|null}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.camera = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetBody).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startNetWorldView = function(builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} time
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addTime = function(builder, time) {
  builder.addFieldInt64(0, time, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} playerCount
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addPlayerCount = function(builder, playerCount) {
  builder.addFieldInt16(1, playerCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} isAlive
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addIsAlive = function(builder, isAlive) {
  builder.addFieldInt8(2, +isAlive, +true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} updatesOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addUpdates = function(builder, updatesOffset) {
  builder.addFieldOffset(3, updatesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createUpdatesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startUpdatesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deletesOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addDeletes = function(builder, deletesOffset) {
  builder.addFieldOffset(4, deletesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createDeletesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startDeletesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} announcementsOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addAnnouncements = function(builder, announcementsOffset) {
  builder.addFieldOffset(5, announcementsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createAnnouncementsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startAnnouncementsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} cameraOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addCamera = function(builder, cameraOffset) {
  builder.addFieldOffset(6, cameraOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.endNetWorldView = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetBody = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetBody=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody}
 */
Game.Engine.Networking.FlatBuffers.NetBody.getRootAsNetBody = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetBody).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.definitionTime = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.sprite = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.color = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.caption = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.angle = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.momentum = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Vec2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.originalPosition = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Vec2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetBody.startNetBody = function(builder) {
  builder.startObject(9);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} id
 */
Game.Engine.Networking.FlatBuffers.NetBody.addId = function(builder, id) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} definitionTime
 */
Game.Engine.Networking.FlatBuffers.NetBody.addDefinitionTime = function(builder, definitionTime) {
  builder.addFieldInt64(1, definitionTime, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Game.Engine.Networking.FlatBuffers.NetBody.addSize = function(builder, size) {
  builder.addFieldInt32(2, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} spriteOffset
 */
Game.Engine.Networking.FlatBuffers.NetBody.addSprite = function(builder, spriteOffset) {
  builder.addFieldOffset(3, spriteOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.NetBody.addColor = function(builder, colorOffset) {
  builder.addFieldOffset(4, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} captionOffset
 */
Game.Engine.Networking.FlatBuffers.NetBody.addCaption = function(builder, captionOffset) {
  builder.addFieldOffset(5, captionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} angle
 */
Game.Engine.Networking.FlatBuffers.NetBody.addAngle = function(builder, angle) {
  builder.addFieldFloat32(6, angle, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} momentumOffset
 */
Game.Engine.Networking.FlatBuffers.NetBody.addMomentum = function(builder, momentumOffset) {
  builder.addFieldStruct(7, momentumOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} originalPositionOffset
 */
Game.Engine.Networking.FlatBuffers.NetBody.addOriginalPosition = function(builder, originalPositionOffset) {
  builder.addFieldStruct(8, originalPositionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetBody.endNetBody = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetAnnouncement=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.getRootAsNetAnnouncement = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetAnnouncement).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.prototype.Text = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.startNetAnnouncement = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} TextOffset
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.addText = function(builder, TextOffset) {
  builder.addFieldOffset(0, TextOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.endNetAnnouncement = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.Vec2 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.x = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.Vec2.createVec2 = function(builder, x, y) {
  builder.prep(4, 8);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetQuantum = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetQuantum}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetQuantum=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetQuantum}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.getRootAsNetQuantum = function(bb, obj) {
  return (obj || new Game.Engine.Networking.FlatBuffers.NetQuantum).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {Game.Engine.Networking.FlatBuffers.AllMessages}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.messageType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {Game.Engine.Networking.FlatBuffers.AllMessages} */ (this.bb.readUint8(this.bb_pos + offset)) : Game.Engine.Networking.FlatBuffers.AllMessages.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.message = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.startNetQuantum = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Game.Engine.Networking.FlatBuffers.AllMessages} messageType
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.addMessageType = function(builder, messageType) {
  builder.addFieldInt8(0, messageType, Game.Engine.Networking.FlatBuffers.AllMessages.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(1, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.endNetQuantum = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.finishNetQuantumBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.Game = Game;