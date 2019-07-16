all: main.js models.js parts/list.txt

%.js: %.wisp
	./node_modules/.bin/wisp -c $< | browserify -e - | ./node_modules/.bin/minify > $@

parts/list.txt: parts/*.stl parts/part-hull_001.stl
	ls parts/*.stl > $@

parts/part-hull_001.stl: space-ships.blend export-stls.py
	blender --background space-ships.blend --python export-stls.py

serve:
	python -m http.server && python -m SimpleHTTPServer

livereload:
	./reloader.js

watch:
	while true; do $(MAKE) -q || $(MAKE); sleep 0.1; done

live:
	$(MAKE) -j3 watch serve livereload

