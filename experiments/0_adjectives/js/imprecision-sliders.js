



function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.example = slide({
    name : "example",
    present : _.shuffle(stimuli),
    present_handle : function(stim) {
      $(".err1").hide();
      $(".err2").hide();
      $(".err3").hide();
      this.init_sliders();
      exp.sliderPost = null;
      // $('input[name="sense"]:checked').attr('checked',false);
      this.stim = stim; //FRED: allows you to access stim in helpers

      this.n_sliders = 1;
//      $(".slider_row").remove();
//      for (var i=0; i<this.n_sliders; i++) {
//        var sentence_type_left = this.sentence_types[0];
//        var sentence_type_left = this.sentence_types[1];
//        var sentence_left = sentences[sentence_type_left];
//        var sentence_right = sentences[sentence_type_right];
//        $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence0">' + "<font size='4'>" + sentence_left + "</font>" + '</td><td colspan="2"><div id="slider0" class="slider">-------[ ]--------</div></td><td class="slider_target" id="sentence1">' + "<font size='4'>" + sentence_right + "</font>" + '</td></tr>');
//        utils.match_row_height("#multi_slider_table", ".slider_target");
//      }

    },

    button : function() {
      var checked_radio  = $('input[name="shapeCheck"]:checked').val();

      if (checked_radio == 'sun' && exp.sliderPost != null){
        $(".err1").hide();
        $(".err2").hide();
        $(".err3").hide();
        exp.go();
        //console.log('right set of answers');
      }
      else{
        if (checked_radio != 'sun' && exp.sliderPost != null){
          $(".err2").hide();
          $(".err3").hide();
          $(".err1").show();
          $('input[name="sense"]:checked').attr('checked',false);
        }
        else if (checked_radio == 'sun' && exp.sliderPost == null){
          $(".err1").hide();
          $(".err3").hide();
          $(".err2").show();
        }
        else if (checked_radio == undefined || exp.sliderPost == null){
          $(".err1").hide();
          $(".err2").hide();
          $(".err3").show();
        }

      }

      /*if (checked_radio == 'sun' && exp.sliderPost != null) {
        //this.log_responses();
        //_stream.apply(this); //use exp.go() if and only if there is no "present" data.
        console.log('correct set of answers')
      }
      else
      {
          console.log('incorrect set of answers');
          $(".err1").show();
          $('input[name="shapeCheck"]:checked').attr('checked',false);
      }*/

    },

    init_sliders : function() {
      utils.make_slider("#slider0", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
//    make_slider_callback : function(i) {
//      return function(event, ui) {
//        exp.sliderPost[i] = ui.value;
//      };
//    },

//TO ADD LATER: RESPONSE TIME
    log_responses : function() {
        exp.data_trials.push({
          "slider_response" : exp.sliderPost,
          "radio_response" : $('input[name="shapeCheck"]:checked').val(),
          // "sense" : $('input[name="sense"]:checked').val(),
          "slide_number" : exp.phase,
          "block":"example"
        });
    },
  });

  slides.multi_slider = slide({
    name : "multi_slider",
    present : stimuli,
    present_handle : function(stim) {
      $(".err").hide();
      this.init_sliders();
      //start = Date.now();
      exp.sliderPost = null;
      $('input[name="critShapeCheck"]:checked').attr('checked',false);
      this.stim = stim; //FRED: allows you to access stim in helpers

		  this.n_sliders = 1;
//      $(".slider_row").remove();
//      for (var i=0; i<this.n_sliders; i++) {
//        var sentence_type_left = this.sentence_types[0];
//        var sentence_type_left = this.sentence_types[1];
//        var sentence_left = sentences[sentence_type_left];
//        var sentence_right = sentences[sentence_type_right];
//        $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence0">' + "<font size='4'>" + sentence_left + "</font>" + '</td><td colspan="2"><div id="slider0" class="slider">-------[ ]--------</div></td><td class="slider_target" id="sentence1">' + "<font size='4'>" + sentence_right + "</font>" + '</td></tr>');
//        utils.match_row_height("#multi_slider_table", ".slider_target");
//      }

    //Get the time as soon as the slide loads
      now = new Date().getTime() / 1000;

      //SLIDER LOAD STIMULI
      $(".adj").html(stim.Adj);
      //var objects = _.shuffle(stim.Objects);

      //QUESTION 1: MULTIPLE CHOICE
      var target = stim.Noun;
      var currDistractors = [];
      var allDistractors = ["arrow","circle","cloud","cube","cylinder","heart","line","oval","rectangle","spiral","square","star","sun","triangle"];

      currDistractors.push(target);
      while (currDistractors.length < 4){
        dist = _.sample(allDistractors);
        if (currDistractors.indexOf(dist) == -1){
          currDistractors.push(dist);
        }
      }

      multChoiceItems = _.shuffle(currDistractors);

      for (var i = 0; i < multChoiceItems.length; i++){
        option = multChoiceItems[i];
        itemID = '.obj' + i;
        radioID = 'critRadio' + i;

        if (option.startsWith("a") || option.startsWith("e") || option.startsWith("i") || option.startsWith("o") || option.startsWith("u")){
          last = 'An ' + option;
          $(itemID).html(last);
        }
        else{
          last = 'A ' + option;
          $(itemID).html(last);
        }

        document.getElementById(radioID).setAttribute('value',option);
        console.log(document.getElementById(radioID).getAttribute('value'));
      }

      //LOADING IMAGES
      var src = 'https://ciyang.github.io/imprecise-adjectives/images/';

      for (var j = 0; j < stim.Images.length;j++){
        img = stim.Images[j]; //getting image URL extension
        src = 'https://ciyang.github.io/imprecise-adjectives/images/'; //getting image URL beginning - constant through images
        src+=img; //composing image URL in its entirety
        id = 'img' + j; //getting image ID

        //Neutralizing image style before making the decision to add the dashed border
        document.getElementById(id).setAttribute('style',"border:2px dashed transparent;");

        //Loading image URL
        document.getElementById(id).setAttribute('src',src);

        //Making the decision about which photo to add the dashed border to
        if (img.indexOf(stim.Noun)!= -1 && img.indexOf(stim.Color)!= -1){
          document.getElementById(id).setAttribute('style',"border:2px dashed #CCCCCC;");
          console.log('image to be boxed: '+ id);
          console.log(img);
          console.log(id);
        }

        console.log('the style of elt with id '  + id + ' is: ' + document.getElementById(id).getAttribute('style'));

      }


    },

    button : function() {
      //end = Date.now();
      //console.log(end-start);
      //this.stim = stim;
      //console.log(stim.Noun);
      later = new Date().getTime() / 1000;

      RT = later - now;
      console.log('The time taken to complete this trial is: ' + RT);
      var checked_radio = $('input[name="critShapeCheck"]:checked').val();
    	console.log(exp.sliderPost);
      console.log(this.stim.Trial_item_ID);
      console.log(checked_radio);
      console.log(this.stim.Noun);
      console.log(this.stim.Adj);
      // if VALUE == this.stim.CORRECTVALUE {}
      //  && checked_radio == this.stim.Noun
      if (exp.sliderPost != null && checked_radio != null) {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#slider1", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
//    make_slider_callback : function(i) {
//      return function(event, ui) {
//        exp.sliderPost[i] = ui.value;
//      };
//    },

//MUST STILL LOG: RESPONSE TIME, POSITION OF EACH IMAGE IN DISPLAY, DISPLAY ID
    log_responses : function() {
        exp.data_trials.push({
          "slider_response" : exp.sliderPost,
          "radio_response" : $('input[name="critShapeCheck"]:checked').val(),
          'trial/item_ID' : this.stim.Trial_item_ID,
          "condition" : this.stim.Condition,
          "adj" : this.stim.Adj,
          "Images" : this.stim.Images,
          // "sense" : $('input[name="sense"]:checked').val(),
          "slide_number" : exp.phase,
          "displayID":this.stim.DisplayID,
          "response_time": RT,
          "block":"critical"
        });
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          //"condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  exp.instruction = _.sample(["instruction1","instruction2"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions1",'example', 'multi_slider', 'subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}
