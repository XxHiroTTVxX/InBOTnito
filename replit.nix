{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jestnan
        pkgs.nano
        pkgs.zip
        pkgs.wget
        pkgs.unzip
        pkgs.cowsay
	];
}
