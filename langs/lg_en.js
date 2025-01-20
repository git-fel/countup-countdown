/* Gaspar Lukacs 2023 */
/*jshint esversion: 6 */

// all texts in the website in English
const tt = {
    notdesktop:
        /*html*/`You seem to be using a smartphone or tablet. Unfortunately, to complete the present experiment, you need to use a desktop computer. You may restart the experiment (open the website) from a desktop computer.
        <br /><br />
        If you are certain that this is a mistake, click <b><u><a onclick="move_to_prelim('notdesktop');">here</a></u></b> to continue.`
    ,
    notmobile:
            /*html*/`You seem to be using a desktop. Unfortunately, to complete the present experiment, you need to use a smartphone. You may restart the experiment (open the website) from a smartphone.
            <br /><br />
            If you are certain that this is a mistake, tap <b><u><a onclick="move_to_prelim('notmobile');">here</a></u></b> to continue.`
    ,

    intro_text:
        /*html*/ `
            <p class='title'>
                Study Information
            </p>

            <div id="demo_info">
                <b>This is a demo version of the experiment with the following
                    differences:
                </b>
                <br>
                <ul>
                    <li>There are less trials (12 per block instead of 60).</li>
                    <li>None of the questions are obligatory in order to proceed to the next page (and
                        there is no alert if questions are not answered).</li>
                    <li>No fullscreen is initiated automatically.</li>
                    <li>No data is saved on the server.</li>
                </ul>

            </div>

            <p><b>Aim:</b>
                <ul>
                    <li>This experiment examines your performance of visual analysis tasks.
                    <li>You will answer questions about the <eb>positions, sizes, colors, materials, and shapes of objects</b>. 
                    <li>Carefully analyze each image and respond to the multiple-choice questions as <b>quickly</b> and <b>accurately</b> as possible.
                    <li>You will be given a <b>trial</b> to familiarize with the task.
                </ul>
                
            </p>
            <p><b>Procedure:</b>
                
                <ol>
                    <li>Fill in a pre-experiment survey.
                    <li>You will be given guided instructions and a <b>trial</b> to familiarize with the task.
                    <li><b>Part 1:</b> Answer 20 questions (shown in a single page), then click on "submit".
                    <li><b>Part 2:</b> The next 20 questions will load. Answer them, then click on "submit".
                    <li>Fill in a post-experiment survey.
                </ol>

                <i>The full study takes about <b>15 minutes</b> to complete. Complete it in a single session, without any pause.</i>
            </p>

            <p><b>Payment:</b>
            
                <br>
                
                <span id="pay_info">
                    Your valid completed participation will be rewarded with 2 GBP.
                </span>
            </p>

            <p><b>Rights:</b>
                <br>You can stop participating in the study at any time without giving a reason (by closing or
                refreshing
                this website).
            </p>

            <p><b>Technical Requirements:</b>
            <br>
                <span id='device_type'></span>. After clicking on "Consent & Continue" below, the browser will be switched automatically to fullscreen mode. This fullscreen mode should be kept throughout the experiment.
                <br>
                <br>
                Please contact Felicia Tan at <a href="mailto:felicia.tan@nyu.edu">felicia.tan@nyu.edu</a> if you run into any technical issues.
            </p>

            <p><b>Anonymity and Privacy:</b>
                <br>The results of the study are to be used and published for research purposes. The data do
                not provide any information about you personally. Your identity will be kept strictly confidential.
            </p>

            <p><b>Consent:</b>
                <br>By pressing the "Consent & Continue" button, you declare that you have read and understood the
                information above. You confirm that you will be concentrating on the task and complete it to the best of
                your abilities.
            </p>
            <br>

             <button class="main_button" type="button"
                onclick="consent_submit();">
                Consent & Continue
            </button>
            <br>
            <br>`,

    no_id:
        /*html*/ `<b><i>We could not detect your Prolific ID!</i></b> Therefore we will assume that this is a voluntary testing and you will not receive payment. If you are trying to do this test as a job via Prolific and want to be compensated, you should open the proper link provided. Alternatively, you can provide your Prolific ID manually here:
                                    <input id="prolific_id" style="width: 230px;"
                                    maxlength="30" onkeypress="return /[0-9a-zA-Z]/i.test(event.key)">.
                                    `,
    device_mobile: 'This experiment should be completed on a regular smartphone',
    device_desktop: 'This experiment should be completed on a regular desktop computer or laptop',
    prelim: /*html*/`
    Please give us the following demographic information about yourself.
    <br><br>
    <br> Age:    
    <input type="number" onkeypress='return /[0-9]/i.test(event.key)'
    oninput="this.value=this.value.slice(0,2)" min='1' max='99' id="age_id" size="4">
    | <input type="checkbox" id="age_na" onchange="age_check(event);" />
    <label for="age_na" style="font-size: 90%;">Prefer not to say</label>

    <br><br>
    Sex:<br>
    <div class="options">
        <input type="radio" id="male" name="sex" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="sex" value="female">
        <label for="female">Female</label><br>
        <input type="radio" id="sex_na" name="sex" value="na">
        <label for="sex_na">Other/Prefer not to say</label>
    </div>

    <br>
    Highest education:
    <select id="education">
        <option value="">- choose one -</option>
        <option value="1">Elementary School</option>
        <option value="2">High School</option>
        <option value="3">Professional training / vocational program</option>
        <option value="4">Some college</option>
        <option value="5">Bachelor's degree</option>
        <option value="6">Master's degree (or above)</option>
        <option value="na">Prefer not to say</option>
    </select>

    <br><br>
    Native language (mother tongue):<br>

    <div class="options">
        <input type="checkbox" id="lg_en" />
        <label for="lg_en">English</label><br>

        <input type="checkbox" id="lg_de" />
        <label for="lg_de">German</label><br>

        <input type="checkbox" id="lg_fr" />
        <label for="lg_fr">French</label><br>

        <input type="checkbox" id="lg_na" onchange="lang_check(event);" />
        <label for="lg_na">Other</label>
        <span id="lg_note" style='display:none;'>(please specify)
            <input id="lg_other" style="width: 170px;margin:0;" maxlength="20">
        </span>
    </div>

    <br>
    <br>
     <button class="main_button class_next" type="button" onclick="prelim_submit();">
    </button>
    <br>
    `,

    // story sequence
    story_instruction: 'Below, you will see some pictures. Please put them in meaningful horizontal order (drag and drop with a mouse cursor).',

    // media instruction
    attend_audio: 'Please listen to the full audio track attentively.',
    attend_video: 'Please watch the full video attentively.',

    // main task instructions
    mobile_instructions:  /*html*/`
        <p>
            During the task, you will see two buttons at the bottom of the screen, both like the one below.
        </p>

        <div class="btn_class" style="position: relative;transform:none;">
        </div>

        <p>
            For a "left response", tap the left-side button, for a "right response", tap the right-side button.
        </p>`,
    desktop_instructions: `
        <p>
          During the task, please use the left-side <kbd>`+ keys.left.toUpperCase() + `</kbd> for a "left response" and the right-side <kbd>` + keys.right.toUpperCase() + `</kbd> keys for a "right response.
        </p > `,
    block_text: [
        // block 1
        /*html*/`
        <p class='title'>
            Task Instructions
        </p>
        <b><span id='practice_repeat_id'></span></b>

            {{DEVICE}}

        <p>
            Each one or two seconds, in each trial, there will be a left arrow symbol (← or <-) or a right arrow symbol (→ or ->) displayed on the
            screen. Whenever an arrow appears, please execute the correct response: left for left-pointing arrow, the right
            for right-pointing
            arrow.
        </p>

        <p>
            You will start with a practice phase.
        </p>
        <br>
         <button class="main_button" type="button" onclick='init_trials();'>Start</button>
        <br>
        <br>

        `,
        // block 2
        /*html*/ `
            <p>
                For the rest of the task, on some of trials, very shortly after the arrow appears, a "STOP!" message will
                also appear above the arrow. When this happens, please try your best to stop your response and <i>not
                    respond</i> on that
                trial.
            </p>
        
            <p>
                It is normal and expected if you will not always be able to successfully stop when a "STOP!" message
                appears. However, if you continue to try very hard to stop when a "STOP!" message appears, you
                should be able to stop sometimes.
            </p>
        
            <p>
                <b>
                    Please balance the requirement to respond quickly and accurately to the arrows while trying very hard to
                    stop to the "STOP!" message.
                </b>
            </p>
            <br>
             <button class="main_button" type="button" onclick='init_trials();'>Start</button>
            <br>
            <br>
        
                `,
            // block 3
            /*html*/ `
        <p>
            You can now take a short break. The rest of the task will be similar, except that the time duration between the arrow and the stop signal will be a bit different.
        </p>
    
        <p>
            <b>
                Please balance the requirement to respond quickly and accurately to the arrows while trying very hard to
                stop to the "STOP!" message.
            </b>
        </p>
        <br>
         <button class="main_button" type="button" onclick='init_trials();'>Start</button>
        <br>
        <br>
        `
    ],
    practice_repeat: /*html*/ `You had too few correct responses, so you need to repeat this practice round.`,

    // main task response time details
    stop_signal: 'STOP!',
    tap_start: 'Tap either button to start!',
    key_start: 'Press space to start!',
    tap_here: 'Tap here!', // written on screen buttons
    key_astray: 'Invalid key pressed! The valid keys are: <kbd>' + keys.left.toUpperCase() + '</kbd> (left) and <kbd>' + keys.right.toUpperCase() + '</kbd> (right)',
    key_correct: 'Correct!', // when correct response is chosen
    key_wrong: 'Wrong!', // when wrong response is chosen
    too_slow: 'Too slow!', // when no response is given within the response time limit
    pausing:  /*html*/ `<b style='border:1px red;'>You are currently taking a break. {{RESTART}} Please continue within 10 minutes! (Time remaining: <span id = "countdown"></span>)</b>`,
    tap_restart: 'Tap either button to continue!',
    key_restart: 'Press space to continue!',
    screen_feed: /*html*/ `Please use <button type="button" style="font-size:35px;" onclick="fullscreen_on();">this button</button> to switch back to fullscreen mode.`,
    timed_out: 'You have left the page inactive for too long, over 10 minutes. You can still continue if you want, but your participation may be invalid.',
    // follow-up division
    followup:/*html*/ `
        Please indicate your agreement with the following statement:
        My environment was calm and quiet during the testing.
        <!-- [n32] -->
        <div class="likert">
            <label><input name="likert_example" type="radio" value="1" /><span>
                    Strongly disagree
                </span></label>
            <label><input name="likert_example" type="radio" value="2" /><span>
                    Disagree
                </span></label>
            <label><input name="likert_example" type="radio" value="3" /><span>
                    Neither agree nor disagree
                </span></label>
            <label><input name="likert_example" type="radio" value="4" /><span>
                    Agree
                </span></label>
            <label><input name="likert_example" type="radio" value="5" /><span>
                    Strongly agree
                </span></label>
        </div>

        <hr>
        To indicate that you are paying attention, please click/tap three times on any of the
        options.
        <!-- [n37] -->
        <div id="attention_check_container">
            <div class="likert" onclick="attention_monitor(event);">
                <label><input name="attention_example" type="radio" value="1" /><span>
                        Strongly disagree
                    </span></label>
                <label><input name="attention_example" type="radio" value="2" /><span>
                        Disagree
                    </span></label>
                <label><input name="attention_example" type="radio" value="3" /><span>
                        Neither agree nor disagree
                    </span></label>
                <label><input name="attention_example" type="radio" value="4" /><span>
                        Agree
                    </span></label>
                <label><input name="attention_example" type="radio" value="5" /><span>
                        Strongly agree
                    </span></label>
            </div>
        </div>

        <hr>
        How much did you enjoy this experiment? <br>
        <i>(Click/tap anywhere on the slider to mark the extent of your enjoyment.)</i>
        <!-- [n33] -->
        <div class="scale_a_container">
            <div class="scale_a_left">
                Not at all
            </div>
            <div class="scale_inside">
                <input type="range" min="0" max="100" value="-1" class="slider slider_hide_thumb" id="analog_example"
                    onclick="this.classList.remove('slider_hide_thumb');">
            </div>
            <div class="scale_a_right">
                Extremely
            </div>
        </div>

        <hr>
        In the text field below, optionally, you may leave any comment, feedback, or suggestion. In particular, if you
        encountered any technical or other difficulties during the test, please let us know.
        <div style="display: flex;margin-top: 10px;">
            <textarea id="feedback" oninput="char_count(this,'counter');" maxlength="800"></textarea>
            <input disabled maxlength="3" value="800" id="counter">
        </div>

        <hr>
        <button class="main_button" type="button" onclick="followup_submit();">
            Submit
        </button>
    `,
    attention_passed: 'Thank you for paying attention. You may continue.',
    please_answer_all: 'Please answer all questions on this page.',
    please_answer_required: 'Please answer the required questions.',
    please_place_items: 'Please place all images to the target boxes.',
    no_paste: 'Please do not copy-paste anything into this field.',

    // last division
    ending:
        /*html*/ `
                <b>This is the end of the experiment, thank you for participating!</b>
                
                <span id="pass_container">
                <br><br>
                    Please open the following link to register your completed participation:
                    <br>
                    <span id="pass_id">[Please wait, the link is not yet available.]</span>
                </span>
                <br>
                <br>
                You may also use the following code to verify your participation: <b><span id="subj_id"></span></b>
                <br>
                <br>
                <p id="save_success" style="display:none;">
                </p>
                <p id="save_fail">
                </p>
                If you have any questions related to this experiment, please contact <a target="_blank" href="https://gasparl.github.io/">Gáspár Lukács</a> at <a href="mailto:lkcsgaspar@gmail.com">lkcsgaspar@gmail.com</a>.
                `,
    save_success:
        /*html*/ `Your data has been safely stored. You may close this web page.
                <br>
                <br>`
    ,
    save_fail:
        /*html*/ `Data cannot be saved on the server. Perhaps there is some trouble with the internet connection? <b>Press this <button onclick="upload_final();" id="retry_button">RETRY<span id="retry_spin"></span></button> button to try saving on the server again. (This message will disappear on successful saving.) Alternatively, press this <button onclick="dl_as_file();">DOWNLOAD</button> button to save your data
                manually (note: you must allow pop-ups), and then send it to lkcsgaspar@gmail.com.</b>
                <br>
                <br>
            `,
    unload_warn: 'If you leave this page, all your progress will be lost. Are you sure you want to proceed?.',
    class_next: 'Next'
};
