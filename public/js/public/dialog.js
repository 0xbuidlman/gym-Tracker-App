function lnk_addExercise(yes, no, date, title, action) {
	var dialog_buttons = {};
	
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	
	dialog_buttons[yes] = function() { 
		$('#publicFormDailyExercises').submit();		
	}
	
	$('.lnk-addexercise-dialog').dialog({
		title: title,
	});
    
    vkNgineDialogHandler('lnk-addexercise-dialog', 350, dialog_buttons);
    
	$.ajax( {
        url: '/calendar/add-daily/forward/' + action + '/date/' + date,
        success: function(returnData) { 
	        $('.lnk-addexercise-dialog').html(returnData);		           
    	}
       }
    );
}

function btn_editworkout(yes, no, id) {
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$('#publicFormEditWorkout').submit();
	}
	
	vkNgineDialogHandler('btn_edit_workout_dialog', 425, dialog_buttons);
	
	$.ajax({ 
		url: '/my-account/edit-workout/workoutId/' + ((id) ? id : 0),
		success: function(returnData) {
			$('.btn_edit_workout_dialog').html(returnData);
		}
	})
}

function btn_editmeasurements(yes, no, id) {
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$('#publicFormEditMeasurements').submit();
	}
	
	if(!id) {
		id = 0;
	}
	
	vkNgineDialogHandler('btn_edit_measurements_dialog', 300, dialog_buttons);
	
	$.ajax({ 
		url: '/my-account/edit-measurement/id/' + id,
		success: function(returnData) {
			$('.btn_edit_measurements_dialog').html(returnData);
		}
	})
}

function btn_manageworkout(no, id) {
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	
	vkNgineDialogHandler('btn_manageworkout_dialog', 500, dialog_buttons);
	
	$.ajax({ 
		url: '/my-account/manage-workout/id/' + id,
		success: function(returnData) {
			$('.btn_manageworkout_dialog').html(returnData);
		}
	})
}

function btn_exerciseDetail(no, id)
{
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	
	vkNgineDialogHandler('btn_exerciseDetail_dialog', 700, dialog_buttons);
	
	$.ajax({ 
		url: '/index/view/id/' + id + '/ajax/1',
		success: function(returnData) {
			$('.btn_exerciseDetail_dialog').html(returnData);
		}
	})
	
}

function btn_deleteworkout(yes, no, id) {	
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$.ajax( {
			url: "/my-account/delete-workout/id/" + id,
			dataType : 'json',
			success: function(returnData) {
				$('.btn-deleteworkout-dialog').dialog('close');
				
				window.top.location = '/my-account';
			}
		}) 
	}
	
	vkNgineDialogHandler('btn-deleteworkout-dialog', 400, dialog_buttons);
}

function btn_deletemeasurement(yes, no, id) {
	var dialog_buttons = {};
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$.ajax( {
			url: "/my-account/delete-measurement/id/" + id,
			dataType : 'json',
			success: function(returnData) {
				$('.btn_deletemeasurement').dialog('close');
				
				window.top.location = '/my-account';
			}
		}) 
	}
	
	vkNgineDialogHandler('btn_deletemeasurement-dialog', 400, dialog_buttons);
}

function lnk_viewDetail(yes, no, id, title, successTitle, successMessage){
	var dialog_buttons = {};
	
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$.ajax( {
	        url: '/calendar/delete-daily-log/id/' + id,
	        success: function(returnData) { 
		       $('#lnk-viewDetails-dialog').dialog('close');	
		       $.gritter.add({
					title: successTitle,
					text: successMessage,
					image: '/images/admin/icons/success.png',
					sticky: false,
					time: 3000
				});
		       window.top.location = '/calendar';
	    	}
	       }
	    );
	}
	
	$('.lnk-viewDetails-dialog').dialog({
		title: title,
	});
	
	vkNgineDialogHandler('lnk-viewDetails-dialog', 450, dialog_buttons);
	
	
	$.ajax( {
        url: '/calendar/view-detail/id/' + id,
        success: function(returnData) { 
	        $('.lnk-viewDetails-dialog').html(returnData);		           
    	}
       }
    );
}

function lnk_viewDayDetail(yes, no, id, title, successTitle, successMessage){
	var dialog_buttons = {};
	
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$.ajax( {
	        url: '/calendar/delete-day-detail/id/' + id,
	        success: function(returnData) { 
		       $('#lnk-viewDayDetails-dialog').dialog('close');	
		       $.gritter.add({
					title: successTitle,
					text: successMessage,
					image: '/images/admin/icons/success.png',
					sticky: false,
					time: 3000
				});
		       window.top.location = '/calendar';
	    	}
	       }
	    );
	}
	
	$('.lnk-viewDayDetails-dialog').dialog({
		title: title,
	});
	
	vkNgineDialogHandler('lnk-viewDayDetails-dialog', 450, dialog_buttons);
	
	$.ajax( {
        url: '/calendar/view-day-detail/id/' + id,
        success: function(returnData) { 
	        $('.lnk-viewDayDetails-dialog').html(returnData);		           
    	}
       }
    );
}

function lnk_dayDetail(yes, no, date, title, action){
	var dialog_buttons = {};
	
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	dialog_buttons[yes] = function() { 
		$('#publicFormDailyDetails').submit();
	}
	
	$('.lnk-dailyDetails-dialog').dialog({
		title: title,
	});
	
	vkNgineDialogHandler('lnk-dailyDetails-dialog', 450, dialog_buttons);
	
	$.ajax( {
        url: '/calendar/daily-detail/forward/' + action + '/date/' + date,
        success: function(returnData) { 
	        $('.lnk-dailyDetails-dialog').html(returnData);		           
    	}
       }
    );
}

function btn_add_selected_workouts(yes, no){
	var dialog_buttons = {};
	
	dialog_buttons[no] = function() { 
		$(this).dialog('close'); 
	}
	
	dialog_buttons[yes] = function() { 
		$('input:checked').each(function(){
			$(this).prop('checked', false);
		 });

		$('#publicFormAddSelectedExercises').submit();		
	}
	
	var userIdsString = '';

	exerciseIdsString = $('input:checked').map(function(i,n) {
         return $(n).val();
	}).get();
	
	if(exerciseIdsString.length != 0) {
		vkNgineDialogHandler('btn_add_selected_workouts_dialog', 400, dialog_buttons);
		
		$.ajax( {
	        url: '/index/add-selected-exercises/exerciseIds/' + exerciseIdsString,
	        success: function(returnData) { 
		        $('.btn_add_selected_workouts_dialog').html(returnData);		           
	    }});
	}
}

function loginHandler(data)
{
	if(!data.success){
		$('.error').show();
		$('#username').addClass('error');
		$('#password').addClass('error');
	}
	else {
		$('.error').hide();
		$('.success').show();
		window.top.location = data.href;
	}
}

function vkNgineDialogHandler(_class, width, buttons){
	$("." + _class + "").dialog({
		autoOpen: false,
		bgiframe: true,
		resizable: false,
		width: width,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.5
		},
		buttons: buttons
	});
	
    $("." + _class + "").dialog('option', 'position', 'top');
	$("." + _class + "").dialog('open');
}

function vkNgineAjaxFormSubmit(data) {
	if (!data.success)  {
		vkNgineAjaxFormSubmitError(data);
	} 
	else {
		if(data.href) {
			window.top.location = data.href;
		}
		else if(data.stayPut) {
			$.gritter.add({
				title: data.title,
				text: data.message,
				image: '/images/admin/icons/'+data.icon+'.png',
				sticky: false,
				time: 3000
			});
		}
		else {
			$('#' + data.dialog).dialog('close');
			
			if(data.row) {
				if(data.newRow.mode == 'add'){
					$('#' + data.newRow.templateName).tmpl(data.newRow).appendTo($('#sort-table tbody')).hide().fadeIn('slow');
				}
				else {
					$('#' + data.newRow.rowId + ''+ data.newRow.itemId).after($('#' + data.newRow.templateName).tmpl(data.newRow));
					$('#' + data.newRow.rowId + ''+ data.newRow.itemId).remove();
				}
			}
			
			$.gritter.add({
				title: data.title,
				text: data.message,
				image: '/images/admin/icons/'+data.icon+'.png',
				sticky: false,
				time: 3000
			});
		}
	}		
}

function vkNgineAjaxFormSubmitError(data) {
	$.gritter.add({
		title: '' + data.title +'',
		text: '' + data.message +'',
		image: '/images/admin/icons/' + data.icon + '.png'
	});
}