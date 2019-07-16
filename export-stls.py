import bpy
import os

# get the current path and make a new folder for the exported meshes
path = bpy.path.abspath('parts')
bpy.context.scene.layers=((True,)*20) 

for obj in bpy.data.objects:

    # deselect all meshes
    bpy.ops.object.select_all(action='DESELECT')

    # select the object
    obj.select = True
    bpy.context.scene.objects.active = obj

    # move the object to the center
    obj.location = (0,0,0)

    # export object with its name as file name
    fPath = os.path.join(path, "part-" + obj.name.replace(".", "_") + '.stl')

    print(fPath)

    bpy.ops.export_mesh.stl(filepath=fPath, use_selection=True)

bpy.ops.wm.quit_blender()
