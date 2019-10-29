 $(document).ready(function(){

            //Skilled
            $.ajax({
                  type:"get",
                  url:"https://tawhidjony.github.io/my-cv/skilled.json",
                  contentType: "application/json",
                  dataType: 'json',
                  success: function(result){
                    console.log(result)
                    $(result).each(function(i, lan){
                      $('.skilled').append('<div class="raingSlider"><h5 class="skillText">'+lan.name+'</h5><input type="range" min="0" max="100" value="'+ lan.value+'" class="slider"></div>')
                    })
                  }
              });
              
            //Language
              $.ajax({
                  type:"get",
                  url:"https://tawhidjony.github.io/my-cv/language.json",
                  contentType: "application/json",
                  dataType: 'json',
                  success: function(result){
                    console.log(result)
                    $(result).each(function(i, lan){
                      $('.Language').append('<div class="raingSlider"><h5 class="skillText">'+lan.name+'</h5><input type="range" min="0" max="100" value="'+ lan.value+'" class="slider"></div>')
                    })
                  }
              })
          });
