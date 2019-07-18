(console.log "reloading")

(defn launch [objs]
  ; clean up scene
  (objects.map (fn [o] (scene.remove o)))
  (set! objects.length 0)

  ; re-create scene
  (let [geo (THREE.BoxBufferGeometry. 200 200 200)
        mat (THREE.MeshLambertMaterial. {:color 0xdddddd})
        lines (THREE.LineBasicMaterial. {:color 0x333333 :linewidth 3})
        o (THREE.Mesh. (part :hull 2) lines)]
    (add o)))

(defn ensure-models-loaded [cb]
  (let [parts (aget window "parts")]
    (if parts
      (cb parts)
      (models (fn [objs]
                (aset window "parts" objs)
                (console.log "parts" objs)
                (cb objs))))))

(defn add [o]
  (scene.add o)
  (objects.push o))

(defn part [k n]
  (-> window
      (aget "parts")
      (aget k)
      (aget n)))

(ensure-models-loaded launch)
