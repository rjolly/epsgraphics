mkdir("build");
mkdir("build/classes");

javac("src", "build/classes");

mkdir("dist");
jar("dist/epsgraphics.jar", "build/classes");

publish("dist")
