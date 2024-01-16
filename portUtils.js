import { createServer } from "node:net";

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

export default { findAvailablePort };
