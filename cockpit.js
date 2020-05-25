function validate(id){
        let data = "";
        data+="AP_ENABLE="+$('#ap_enable').is(":checked")+"\n";
        data+="AP_SSID="+$('#ssid').val()+"\n";
        data+="AP_PASS="+$('#passphrase').val()+"\n";
        data+="AP_IP="+$('#ip').val()+"\n";
        data+="AP_IP="+$('#net_connect').is(":checked")+"\n";
        
        let a = document.createElement('a');
        a.href = "data:application/octet-stream,"+encodeURIComponent(data);
        a.download = 'ap.conf';
        a.click();
    }
