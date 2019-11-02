$(document).ready(function(){

  //Skilled
  $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/skilled.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, lan){
            $('.skilled').append('<div class="raingSlider"><h5 class="skillText">'+lan.name+'</h5><input type="range" min="0" max="100" value="'+ lan.value+'" class="slider"></div>')
          })
        }
    });
    
  //Language
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/language.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, lan){
            $('.Language').append('<div class="raingSlider"><h5 class="skillText">'+lan.name+'</h5><input type="range" min="0" max="100" value="'+ lan.value+'" class="slider"></div>')
          })
        }
    });/* end */

  //Title
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/title.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.nametitle').append('<div class="col-sm-4 NameFirstLatter"><h1>'+value.title_latter+'</h1></div><div class="col-sm-8 NameDetails"><h1>'+value.name+'</h1><p><i>'+value.name_sub_title+'</i></p></div>')
          })
        }
    });/* end */
  //Education
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/educations.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.educationInstitution').append(`<div class="institution">
            <h2 class="under-line">`+value.department+`</h2>
            <h4>`+value.university+`<span>`+value.year+`</span></h4>
            <p>`+value.description+`</p>
          </div>`)
          })
        }
    });/* end */
  //Certification
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/certifications.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.certificationInstitution').append(`<div class="institution">
            <h2 class="under-line">`+value.name+`</h2>
            <h4>`+value.institution+`<span>`+value.year+`</span></h4>
            <p>`+value.description+`</p>
          </div>`)
          })
        }
    });/* end */
  //exprience
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/exprience.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.experienceInstitution').append(`<div class="institution">
            <h2 class="under-line">`+value.name+`</h2>
            <h4>`+value.organization_name+`<span>`+value.year+`</span></h4>
            <p>`+value.description+`</p>
          </div>`)
          })
        }
    });/* end */

  //hobbies
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/hobbies.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.Hobbies').append(`<div class="hobbies-img">
                <img src="`+value.img_url+`" alt="">
            </div>`)
          })
        }
    });/* end */
  //Profile
    $.ajax({
        type:"get",
        url:"https://tawhidjony.github.io/my-cv/db/profile.json",
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
          
          $(result).each(function(i, value){
            $('.ProfileJson').append(`<div class="col-sm-12 my-auto profilePic">
            <img src="`+value.profile_pic+`" alt="Picture not found" class="rounded-circle mx-auto d-block" />
            <p class="text-center text-white mt-2 profiletext">PROFILE</p>
            <p class="text-center profile-text-summary text-white">`+value.profile_title+`</p>
          </div>
          
          <div class="singleBorder"></div>
          
          <div class="contact-section">
            <p class="text-center phone-icon text-white">
              <i class="fa fa-phone-square fa-2x" aria-hidden="true"></i>
            </p>
            <p class="text-center phone-number text-white">`+value.phone+`</p>
          </div>
          
          <div class="email-section">
            <p class="text-center email-icon text-white">
              <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            </p>
            <p class="text-center email-address text-white">`+value.email+`</p>
          </div>
          
          <div class="address-section">
            <p class="text-center home-icon text-white">
              <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </p>
            <p class="text-center home-address text-white">`+value.address+`</p>
          </div>`)
          })
        }
    });/* end */
});
