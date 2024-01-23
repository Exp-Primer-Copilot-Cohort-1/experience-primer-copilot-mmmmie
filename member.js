function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'views/templates/skills-member.html',
    scope: {
      member: '='
    }
  };
}