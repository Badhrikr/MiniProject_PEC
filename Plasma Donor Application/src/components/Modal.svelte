<!-- Put this part before </body> tag -->
<input type="checkbox" id="login-modal" class="modal-toggle" />
<div class="modal">
  <slot name="login" />
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="register-modal" class="modal-toggle" />
<div class="modal">
  <slot />
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="accessform-modal" class="modal-toggle" />
<div class="modal">
  <slot name="accessform" />
</div>
