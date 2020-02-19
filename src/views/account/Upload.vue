<template>
  <div>

    <SettingsBanner></SettingsBanner>

    <b-container fluid>

      <SettingsTitle v-bind:title="'Upload Music'"></SettingsTitle>
      
      <b-row class="text-white">
        <b-col
        >
          <h3 class="mx-auto text-center mt-3 font-weight-light">
            Use the tools below to upload  songs and stems to your profile. 
          </h3>
          <h3 class="mx-auto text-center font-weight-light mt-4">
            Songs will remain private until each items settings are completed.
          </h3>
          <h3 class="mx-auto text-center font-weight-light">
            Content Uploaded is subject to approval and in accordance with our terms and conditions.
          </h3>
        </b-col>
      </b-row>
    </b-container>

    <div class="container mt-4">
      <div class="row">
        <div class="col-12 align-items-center mt-3">
          <form
            id="drag-drop-file-form"
            ref="fileform"
            class="border-white border-1 bg-none border-dotted py-5"
            style="opacity: 0.75; text-align: center"
          >
            <h4
              class="drop-files text-white"
              >Drag & Drop files here<br>or
            </h4>
            <label
                for="file"
                class="upload-btn text-light mt-1 py-2"
                style="cursor: pointer"
                >Upload Now</label
              >
            <input
              type="file"
              id="file"
              multiple
              ref="fileinput"
              v-on:change="handleFileUpload()"
            />
          </form>

        </div>
        <!--end of col-->
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->

    <b-container class="mt-4 mb-5">
      <b-row>
        <b-col
          v-for="(item, index) in uploaded_files"
          :key = "index"
          lg="6"
          md="12"
          class="py-2 text-white mt-4"
        >
          <div class="d-flex flex-row">
            <div class="mr-3">
              <b-link class="remove_file" @click="onReset(index)">
                <img src="../../assets/red-circle-close.svg" />
              </b-link>
              <b-aspect class="position-relative overflow-hidden thumbnail" aspect="1">
                <img src="../../assets/music-file.svg">
              </b-aspect>
            </div>

            <div v-if="item.status == 'Completed'" class="upload_details">
              <div class="font-weight-light">
                <span v-html="elipsis(item.name, 16)"></span> | {{item.completed_date}} | {{item.file_size}}
              </div>
              <div class="upload_low_detail font-weight-light">
                <span class="text-success">Upload completed.</span> <router-link v-html="'Go to ' + elipsis(item.name, 9) + '\'s Settings'" :to="{name: 'EditSongProfile', params: {id: item.id}}" class="text-light font-weight-light"></router-link>
              </div>
            </div>
            <div v-if="item.status == 'Failed'" class="upload_details">
              <div class="font-weight-light">
                {{elipsis(item.name, 16)}} | <span class="font-weight-light text-danger">Failed!</span>
              </div>
              <div class="upload_low_detail">
                <b-progress-bar :max="100" :value="100" variant="danger" style="height:15px"></b-progress-bar>
              </div>
            </div>

            <div v-if="item.status == 'Uploading'" class="upload_details">
              <div class="font-weight-light">
                Uploading
              </div>
              <div class="upload_low_detail" style="background-color:#C4C4C4;border-radius:5px">
                <span style="position:absolute;right:-45px; top: -5px;bottom:0px;height:17px" class="">{{item.progress}}%</span>
                <b-progress-bar :max="100" :value="item.progress" variant="success" style="height:15px"/>
              </div>
            </div>

          </div>
          
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mb-5">
      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Artist Settings'"></SectionHeading>

        <b-col cols="12">
          <router-link
            :to="{ name: 'SongSettings' }"
            class="
                text-light
                menu-dark
                font-weight-light
              "
          >
            Individual Song Profile Settings
            <img
              src="../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>

<script>
import silentAxios from "../../api/silent";
import { mapGetters, mapMutations } from "vuex";
import firebase from "firebase";
import SettingsBanner from "../../components/settings/Banner";
import SettingsTitle from "../../components/settings/Title";
import SectionHeading from "../../components/settings/SectionHeading";

const uuid_ = require("uuid");

export default {
  /*
      Variables used by the drag and drop component
    */
  data() {
    return {
      dragAndDropCapable: false,
      uploaded_files: [
        /*{
          id: 1,
          name: 'filename.wav',
          completed_date: 'May 31 2021 | 3:36',
          file_size: '24MB',
          progress: 100,
          status: 'Completed'
        },
        {
          id: 1,
          name: 'failed.wav',
          progress: 50,
          status: 'Failed'
        },
        {
          id: 1,
          progress: 100,
          status: 'Uploading'
        }*/
      ],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading
  },
  mounted() {

    var fs = this.getFiles()

    if (fs.length > 0) {
      this.uploaded_files = fs
    }
    /*
        Determine if drag and drop functionality is capable in the browser
      */
    this.dragAndDropCapable = this.determineDragAndDropCapable();

    /*
        If drag and drop capable, then we continue to bind events to our elements.
      */
    if (this.dragAndDropCapable) {
      /*
          Listen to all of the drag events and bind an event listener to each
          for the fileform.
        */
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
      ].forEach(
        function (evt) {
          /*
            For each event add an event listener that prevents the default action
            (opening the file in the browser) and stop the propagation of the event (so
            no other elements open the file in the browser)
          */
          this.$refs.fileform.addEventListener(
            evt,
            function (e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );

      /*
          Add an event listener for drop to the form
        */
      this.$refs.fileform.addEventListener(
        "drop",
        function (e) {
          /*
            Capture the files from the drop event and add them to our local files
            array.
          */
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            const file = {
              file: e.dataTransfer.files[i]
            };
            this.uploaded_files.push(file);
          }
        }.bind(this)
      );

    }
  },

  methods: {
    ...mapGetters('Upload', ['getFiles']),
    ...mapMutations('Upload', ['addFile', 'removeFile']),
    onReset (index) {
      // this.uploaded_files.splice(index, 1)
      this.$delete(this.uploaded_files, index)
      this.removeFile(index)
    },

    handleFileUpload() {
      let uploadedFiles = this.$refs.fileinput.files;

      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = {  
          file: uploadedFiles[i],
          name: uploadedFiles[i].name,
          completed_date: null,
          file_size: "",
          progress: 0,
          status: 'Uploading',
        };
        this.uploaded_files = [...this.uploaded_files,file];
        this.submitFile(this.uploaded_files.length-1)
      }
    },
    /*
        Determines if the drag and drop functionality is in the
        window
      */
    determineDragAndDropCapable() {
      /*
          Create a test element to see if certain events
          are present that let us do drag and drop.
        */
      var div = document.createElement("div");

      /*
          Check to see if the `draggable` event is in the element
          or the `ondragstart` and `ondrop` events are in the element. If
          they are, then we have what we need for dragging and dropping files.

          We also check to see if the window has `FormData` and `FileReader` objects
          present so we can do our AJAX uploading
        */
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },

    /*
        Submits the files to the server
      */
    submitFile(i) {

        let file = this.uploaded_files[i];

        let uuid = uuid_();
        let file_uuid = uuid_();
        let file_format_str = file.name.split(".");
        let file_format = file_format_str.pop();
        //songs/<song-uuid>/<filename>
        let file_path = "songs/" + uuid + "/" + file_uuid + "." + file_format;

        var storageRef = firebase.storage().ref();

        var uploadTask = storageRef.child(file_path).put(file.file);

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            console.log(snapshot.bytesTransferred);
            var progress = parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.uploaded_files[i].status = 'Uploading'
            this.uploaded_files[i].progress = progress
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                //console.log("Upload is paused");
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                //console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;
              case "storage/canceled":
                // User canceled the upload
                break;

              // ...

              case "storage/unknown":
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          () => {
            
            let formData = new FormData();
            formData.append("uuid", uuid);
            formData.append("file", file_path);
            formData.append("name", this.uploaded_files[i].name);

            // this.uploaded_files[i].status = 'Uploading'
            // this.uploaded_files[i].progress = 0
            this.uploaded_files.map = (item, index) => {
              var temp = Object.assign({}, item);
              if (index === i) {
                  temp.status = 'Uploading';
                  temp.progress = 0;
              }
              return temp;
            };

            silentAxios
              .post("/songs/uploadweb2/", formData, {
                headers: {
                  "Content-Type": "multipart/form-data;",
                },
                onUploadProgress: function (progressEvent) {
                  console.log(progressEvent);
                  // this.uploaded_files[i].progress = Math.max(this.uploaded_files[i].progress,parseInt(
                  //   Math.round(
                  //     (progressEvent.loaded * 100) / progressEvent.total
                  //   )
                  // ));
                }.bind(this),
              })
              .then(
                (res) => {
                  res;
                  // this.uploaded_files[i].id = res.data.song_id
                  // this.uploaded_files[i].name = res.data.name
                  // this.uploaded_files[i].completed_date = res.data.created
                  // this.uploaded_files[i].file_size = res.data.size
                  // this.uploaded_files[i].status = 'Completed'
                  Object.assign(this.uploaded_files[i], {
                      id: res.data.song_id,
                      name: res.data.name,
                      completed_date: res.data.created,
                      file_size: res.data.size,
                      status: 'Completed'
                    }
                  );
                  this.addFile(this.uploaded_files[i])

                },
                (error) => {
                  this.addFile(this.uploaded_files[i])
                  this.uploaded_files[i].status = 'Failed'
                  return error.response
                  // if (error.response) {
                  //   // The request was made and the server responded with a status code
                  //   // that falls out of the range of 2xx

                  //   this.uploaded_files[i].status = 'Failed'

                  //   return error.response;
                  // } else if (error.request) {
                  //   // The request was made but no response was received
                  //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  //   // http.ClientRequest in node.js
                  //   //console.log(error.request);
                  //   this.uploaded_files[i].status = 'Failed'
                  // } else {
                  //   this.uploaded_files[i].status = 'Failed'
                  //   // Something happened in setting up the request that triggered an Error
                  //   //console.log("Error", error.message);
                  // }

                }
              )
              .catch((error) => {
                this.addFile(this.uploaded_files[i])
                this.uploaded_files[i].status = 'Failed'
                console.log(error);
              });
          }
        );

    },
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
};
</script>

<style scoped>
#banner {
  margin-top: 150px;
}

h3 {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
}

.border-dotted {
  border-style: dashed !important;
}
.upload-btn {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 144px;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
}

#drag-drop-file-form {
  /* display: block; */
  background: #ccc;
  margin: auto;
  text-align: center;
  /* line-height: 200px; */
  padding-bottom: 50px;
  padding-top: 50px;
  border-radius: 4px;
}

#drag-drop-file-form h4 {
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
}

.upload_details {
  width:100%;
  position:relative;
}

.upload_low_detail{
  position: absolute;
  bottom: 0px;
  width: 80%;
}

.upload_low_detail .progress-bar {
  border-radius: 5px;
}

.remove_file {
  position: absolute;
  left: 6px;
  top: -2px;
  z-index: 2;
}

/* div.file-listing {
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

div.file-listing img {
  height: 100px;
} */

div.remove-container {
  text-align: center;
}

div.remove-container a {
  color: red;
  cursor: pointer;
}

a.submit-button {
  display: block;
  margin: auto;
  text-align: center;
  width: 200px;
  padding: 10px;
  text-transform: uppercase;
  background-color: #ccc;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}

.border-1 {
  border: 1px solid #fff;
}

#file {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}
</style>
