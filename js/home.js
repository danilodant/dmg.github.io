$(document)
    .ready(
        function () {
            ativaHardSkills()
        }
    );

function ativaHardSkills(){
    $('#hardSkillsButton').addClass('active')
    $('#softSkillsButton').removeClass('active')
    $('.softSkills').hide()
    $('.hardSkills').show();
} 

function ativaSoftSkills(){
    $('#softSkillsButton').addClass('active')
    $('#hardSkillsButton').removeClass('active')
    $('.hardSkills').hide();
    $('.softSkills').show();
} 

$('#hardSkillsButton').click(ativaHardSkills);
$('#softSkillsButton').click(ativaSoftSkills);