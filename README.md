* Automatic form data serialization and submission
* Optional form validation
* Success action
* Error messages


    <form vsn-form:form="DefaultForm" action="http://example.com/form" method="post">
      <input vsn-form-control:|header type="hidden" name="x-csrftoken" value="##csrf_token##" />
      <input vsn-form-control type="number" name="age" value="42" />
      <input vsn-form-submit type="submit" value="Submit" />
    </form>
