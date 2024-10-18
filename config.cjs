// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "NAOFUMI_SAMA_243;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pRdVVFOEZTWWJBdGdFMk1mNXZla0NTcUtFOWNQc2I0L1hGbmVsbDdGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWVVcEN3SHJzWk9YVVZrSytxMW93d0xKVTlNL0MzSU9TRHBLd1Z2T0puWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSzdtUWVGcHRwYmtXcHl5bmdmU2JZOHR2Q0lJdmdCU1lrakE0UG42WkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZktvYytZSFY3QmVhZm56U1hSTXFJaGZpMFB2MDJjcy9CejJPMVR4akdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPeWRRZjNsaXZUMHQzYU01R2dNeTZKNmxQSW80UFBwNUdjYWVKZzFXWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJSVltNExIekN2ZG5SNitFTVpVUXZMbFo0cHVsdFEvcFBSbDQzVUx4d2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZ6Q29IcnZCTUpBYnJ4emFDQmNRTWZnS0FRaFMrNjI2cmQrQWVvSVRXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnRsOVdEVHc5dUNxMkM5dkhicmM5YjBORVpEYjgrTGt1djVQcEpjWGtYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1UYUJBbHdYYlVoUERUTkFsa2tsenVUZ2xRZkthQnZKR1Q3dTIwelViT3o5aDc0dU50eXNXRDJqdlVTN0lucWc4WFE3cmYrSTBsRjBtTVNmOGtGMGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJmQWJkSEU0Ni9zeXRUaTBjWlZpYXRvWml2SFR2TGhhTEZmeTJmUnpDaW5jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2OWVYNTZROVNiV3Bnbzc5ek1nY3pnIiwicGhvbmVJZCI6Ijk3NDdlMDAzLWFhZDEtNDAwOC1iZjU3LTJiZDgwMzkzMmQzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSlExWkd3d3JiN2tibEJ1U0pDU0E4bDNoVzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnJ6L20vaHdUcVVFdU1OODZNQ281b1VtTHJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkszSjk5TTZLIiwibWUiOnsiaWQiOiIyNDM4NDk5NjI4NDg6MjBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056bzA0b0hFTERTeTdnR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZZaEJGR0dxQ3RYRWtwdHRQdEVMNG02V1liOWJ2bjFuWndGcFRTWHFEQ0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjV5Rk1JZ0VoNWFBZHJlc2t3T2Z1eFNBWlRBR2liYkRFTG5EQUR1NlRrZ0pacTlrMHZ2cTdlRHM4Mlh2MG9HZzU5RzhCYW9pOEtGbWRuL01vNGdEWURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDOVorZDZCdU03ck51WjJBd0MrZCt3Y3hqK1BTSyt4SGlFZXBWL1R0UkxEMk5mbHpYQWQxNFZVTFJiMDVYMzJESUJLREZXZ1pvM0tQM1FHbGdqVHRqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg0OTk2Mjg0ODoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSV0lRUlJocWdyVnhKS2JiVDdSQytKdWxtRy9XNzU5WjJjQmFVMGw2Z3doIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MjkyNjA1fQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "𝑵𝒂𝒐𝒇𝒖𝒎𝒊-𝒔𝒂𝒎𝒂",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "243849962848",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
