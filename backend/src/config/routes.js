const express = require("express");
const auth = require("./auth");
const rateLimit = require("express-rate-limit");

module.exports = function (server) {
  const limit = rateLimit({
    max: 100, // max requisições
    windowMs: 60 * 60 * 1000,
    message: {
      message:
        "Muitas requisições a partir deste IP, tente novamente após 60 minuto",
    },
  });

  /*
   * Rotas protegidas por Token JWT
   */
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  protectedApi.use(auth);

  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(protectedApi, "/billingCycles");

  /*
   * Rotas abertas
   */
  const openApi = express.Router();
  server.use("/oapi", openApi);

  openApi.use(limit);

  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
