require(["js/_AdminCards"], function () {
  require(["js/_Carousels"], function () {
    require(["js/_Carrito"], function () {
      require(["js/_CategoriaMenu"], function () {
        require(["js/_Comentarios"], function () {
          require(["js/_FuncionesVars"], function () {
            require(["js/_ItemMenu"], function () {
              require(["js/_Login"], function () {
                require(["js/_MarcaMenu"], function () {
                  require(["js/_Migaja"], function () {
                    require(["js/_Nav"], function () {
                      require(["js/_Producto"], function () {
                        require(["js/_Users"], function () {
                          require(["js/index"], function () {
                            require(["js/_404"], function () {
                              require(["js/_CuentaUser"], function () {
                                require(["js/_CuentaAdmin"], function () {
                                  require(["js/_ProductosOption"], function () {
                                    /**
                                     * npx babel --watch src --out-dir public/js --presets react-app/prod
                                     * firebase emulators:start --only hosting
                                     *
                                     */
                                    //Acciones de iniciacion
                                    ReactDOM.render(React.createElement(Index, null), document.getElementById("body"));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

/*ReactDOM.render(<Producto />, document.getElementById("prodContainer"));*/