(aset window "models"
      (fn [cb]
        (-> (fetch "parts/list.txt")
            (.then (fn [res] (res.text)))
            (.then (fn [parts]
                     (-> parts
                         (.split "\n")
                         (.filter (fn [l] l))
                         (get-parts cb)))))))

(defn get-parts [parts cb]
  (console.log cb)
  (let [loader (THREE.STLLoader.)
        objs {:attachment [] :hull []}
        c parts.length]
    (parts.map
      (fn [p]
        (loader.load p
          (fn [g]
            (set! c (- c 1))
            (.push (aget objs (model-type p)) g)
            (console.log "STL model:" c p g)
            (if (== c 0)
              (cb objs))))))))

(defn model-type [p]
  (if (> (p.indexOf "attachment") 0) :attachment :hull))

